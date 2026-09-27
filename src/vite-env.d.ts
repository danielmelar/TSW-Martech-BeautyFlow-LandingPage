/// <reference types="vite/client" />

interface BeautyFlowPixBuildConfig {
  key: string;
  merchantName: string;
  city: string;
  amount: string;
}

declare const __BEAUTYFLOW_PIX_CONFIG__: Readonly<BeautyFlowPixBuildConfig>;
