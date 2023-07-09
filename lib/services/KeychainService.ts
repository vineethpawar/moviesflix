import * as Keychain from 'react-native-keychain';

export const KeychainService = {
  setAuthenticationInfo: async (
    username: string,
    password: string,
  ): Promise<void> => {
    try {
      await Keychain.setGenericPassword(username, password);
    } catch (error) {
      throw new Error('Failed to store authentication information.');
    }
  },

  getAuthenticationInfo: async (): Promise<{
    username: string;
    password: string;
  } | null> => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        const {username, password} = credentials;
        return {username, password};
      }
      return null;
    } catch (error) {
      throw new Error('Failed to retrieve authentication information.');
    }
  },

  isAuthenticated: async (): Promise<boolean> => {
    try {
      const credentials = await KeychainService.getAuthenticationInfo();
      return !!credentials;
    } catch (error) {
      throw new Error('Failed to check authentication status.');
    }
  },

  clearAuthenticationInfo: async (): Promise<void> => {
    try {
      await Keychain.resetGenericPassword();
    } catch (error) {
      throw new Error('Failed to clear authentication information.');
    }
  },
};
