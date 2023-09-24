export const getProvidersHelper = () => {
  const providers: Record<string, { id: string }> = {};

  const updateProviders = (provider: string) => {
    if (provider in providers) return;
    providers[provider] = { id: provider };
  };

  const getProviders = () => {
    return providers;
  };

  return { updateProviders, getProviders };
};
