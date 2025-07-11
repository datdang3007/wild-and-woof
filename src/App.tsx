import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            {/* English routes */}
            <Route path="animals" element={<div>Animals page coming soon</div>} />
            <Route path="classification" element={<div>Classification page coming soon</div>} />
            <Route path="conservation" element={<div>Conservation page coming soon</div>} />
            <Route path="news" element={<div>News page coming soon</div>} />
            <Route path="about" element={<div>About page coming soon</div>} />
            <Route path="contact" element={<div>Contact page coming soon</div>} />
            
            {/* Vietnamese routes */}
            <Route path="vi" element={<Index />} />
            <Route path="vi/dong-vat" element={<div>Trang động vật sẽ có sớm</div>} />
            <Route path="vi/phan-loai" element={<div>Trang phân loại sẽ có sớm</div>} />
            <Route path="vi/bao-ton" element={<div>Trang bảo tồn sẽ có sớm</div>} />
            <Route path="vi/tin-tuc" element={<div>Trang tin tức sẽ có sớm</div>} />
            <Route path="vi/gioi-thieu" element={<div>Trang giới thiệu sẽ có sớm</div>} />
            <Route path="vi/lien-he" element={<div>Trang liên hệ sẽ có sớm</div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
