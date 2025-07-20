// src/utils/navigation.ts

let navigator: ReturnType<typeof useNavigate>;


export const goNavigate = (path: string) => {
  if (navigator) {
    navigator(path);
  } 
};