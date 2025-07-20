// src/utils/navigation.ts
import { useNavigate } from 'react-router-dom';

let navigator: ReturnType<typeof useNavigate>;

export const initializeNavigation = () => {
  navigator = useNavigate();
};

export const goNavigate = (path: string) => {
  if (navigator) {
    navigator(path);
  } 
};