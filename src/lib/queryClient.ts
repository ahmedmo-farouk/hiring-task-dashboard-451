"use client";

import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //   retry: 1,
      //   refetchOnWindowFocus: false,
      //   refetchOnReconnect: false,
      //   staleTime: 1000 * 60,
    },
  },
});

export default queryClient;
