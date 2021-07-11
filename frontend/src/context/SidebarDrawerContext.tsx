import { createContext, ReactNode , useContext } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrowerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrowerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

  const disclosure = useDisclosure();

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)