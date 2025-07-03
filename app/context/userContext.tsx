'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { UserService } from '@/app/service/userService';
import { UserInfo } from '@/app/service/dtos/user';

interface UserContextType {
  user: UserInfo | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const userService = new UserService();

  const fetchUser = useCallback(() => {

    setLoading(true);
    const userInfo = userService.getUserInfo();
    userInfo.then((res)=>{
      setUser(res);
      if (res && res.uuid) {
        localStorage.setItem('userId', res.uuid);
      }
    }).catch((error)=>{
      console.error('Failed to fetch user info:', error);
      setUser(null);
    }).finally(()=>setLoading(false))
  }, []);

  const logout = () => {
    localStorage.removeItem('userId');
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const value = { user, loading, fetchUser, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};