import { mergeConfig, defineConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(
      config,
      defineConfig({
        resolve: {
          alias: {
            '@': '/src',
          },
        },
        server: {
          // Listen on all network interfaces so EC2 hostname can reach it
          host: true,
          // Allow the EC2 default domain
          allowedHosts: true,
        },
      })
  );
};
