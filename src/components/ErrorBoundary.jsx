import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Fail silently in production but log locally
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Something went wrong</h2>
          <p className="mt-2 text-slate-600 max-w-md">
            The page failed to load. Please try refreshing or returning to the home page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-sky-600 hover:bg-sky-500 text-white rounded-full px-6 py-2.5 text-sm font-semibold transition"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
