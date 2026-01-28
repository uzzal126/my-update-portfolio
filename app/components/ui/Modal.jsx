"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

// Custom hook to check if component is mounted (client-side)
const useIsMounted = () => {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
};

const Modal = ({
  isOpen = false,
  onClose,
  onCancel,
  onConfirm,
  title = "",
  size = "md",
  backdrop = true,
  scrollable = false,
  closeOnBackdrop = true,
  closeOnEscape = true,
  hideHeader = false,
  hideFooter = false,
  hideCloseButton = false,
  hideCancelButton = false,
  hideConfirmButton = false,
  cancelText = "Cancel",
  confirmText = "Confirm",
  confirmButtonClass = "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
  confirmDisabled = false,
  modalBodyClass = "",
  children,
  headerSlot,
  footerSlot,
}) => {
  const mounted = useIsMounted();
  const modalRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  const sizeClasses = {
    xs: "w-full max-w-xs", // 320px
    sm: "w-full max-w-sm", // 384px
    md: "w-full max-w-lg", // 512px
    lg: "w-full max-w-4xl", // 896px
    xl: "w-full max-w-6xl", // 1152px
    xxl: "w-full max-w-7xl", // 1280px
    full: "w-full max-w-full mx-4",
  };

  // Define functions before useEffect hooks
  const close = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const cancel = () => {
    if (onCancel) onCancel();
    close();
  };

  const confirm = () => {
    if (onConfirm) onConfirm();
  };

  // Handle opening - immediately render when isOpen becomes true
  if (isOpen && !shouldRender) {
    setShouldRender(true);
  }

  // Handle closing animation end
  const handleTransitionEnd = useCallback(
    (e) => {
      // Only handle the backdrop's opacity transition
      if (e.target === e.currentTarget && !isOpen) {
        setShouldRender(false);
      }
    },
    [isOpen],
  );

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && closeOnEscape) {
        if (backdrop === true) {
          close();
        } else if (backdrop === "static") {
          console.log("Modal has static backdrop - cannot close with ESC");
        } else if (backdrop === false) {
          close();
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, closeOnEscape, backdrop, close]);

  const handleBackdropClick = () => {
    if (backdrop === true && closeOnBackdrop) {
      close();
    } else if (backdrop === "static") {
      console.log(
        "Modal has static backdrop - cannot close by clicking outside",
      );
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  if (!shouldRender || !mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-999999 overflow-y-auto transition-all duration-300 ease-out ${
        backdrop !== false ? "bg-black/80 " : ""
      } ${isOpen ? "opacity-100" : "opacity-0"}`}
      onClick={handleBackdropClick}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          ref={modalRef}
          className={`bg-white rounded-lg shadow-xl mx-auto transition-all duration-300 ease-out ${
            scrollable
              ? "max-h-[95vh] my-8 flex flex-col overflow-hidden"
              : "my-8"
          } ${sizeClasses[size]} ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          onClick={handleContentClick}
        >
          {/* Header */}
          {!hideHeader && (
            <div
              className={`flex items-center justify-between p-4 border-b border-gray-200 ${
                scrollable ? "shrink-0" : ""
              }`}
            >
              <div className="flex items-center grow">
                {headerSlot ? (
                  headerSlot
                ) : (
                  <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                )}
              </div>
              {!hideCloseButton && (
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                  onClick={close}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div
            className={`p-4 ${scrollable ? "flex-1 overflow-y-auto" : ""} ${
              modalBodyClass || ""
            }`}
          >
            {children}
          </div>

          {/* Footer */}
          {(!hideFooter || footerSlot) && (
            <div
              className={`flex items-center justify-end gap-3 p-4 border-t border-gray-200 ${
                scrollable ? "shrink-0" : ""
              }`}
            >
              {footerSlot ? (
                footerSlot
              ) : (
                <>
                  {!hideCancelButton && (
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                      onClick={cancel}
                    >
                      {cancelText}
                    </button>
                  )}
                  {!hideConfirmButton && (
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${confirmButtonClass} ${
                        confirmDisabled ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={confirmDisabled}
                      onClick={confirm}
                    >
                      {confirmText}
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
