"use client";

import React from "react";
import { Toaster } from "sonner";

export function AppToaster(): React.ReactElement {
  return <Toaster position="top-right" richColors closeButton />;
}
