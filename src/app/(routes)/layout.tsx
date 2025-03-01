import Navbar from "@/components/Navbar";
import React from "react";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <main className="py-8">
          <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="hidden lg:block lg:col-span-3">Siddebar</div>
              <div className="lg:col-span-9">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RoutesLayout;
