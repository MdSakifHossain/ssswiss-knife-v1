// @ts-nocheck

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Kbd } from "@/components/ui/kbd";
import { useAppConfig } from "@/contexts/appConfig/AppConfigProvider";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home03Icon,
  Menu11Icon,
  MoonIcon,
  SalahIcon,
  Settings02Icon,
  Square01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";

// ===== MAIN STUFF =======================================================

export function CommandPalette() {
  const [cpOpen, setCpOpen] = useState(false);
  const navigate = useNavigate();
  const { setTheme } = useAppConfig();

  const openCP = () => setCpOpen(true);
  const closeCP = () => setCpOpen(false);

  const commands = {
    // Navigation actions
    goHome: () => navigate("/"),
    goProfile: () => navigate("/profile"),
    goSettings: () => navigate("/settings"),
    goMultiplicationTable: () => navigate("/multiplication_table"),
    goTaraweehCounter: () => navigate("/taraweeh_counter"),

    // Theme/Cursor actions
    toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
  };

  const CPObj = createCPConfig({
    navigate,
    setTheme,
    commands,
    closeCP,
  });

  return (
    <div className="flex flex-col gap-4">
      <p onClick={() => openCP()}>
        <HugeiconsIcon icon={Menu11Icon} className="size-6" />
      </p>

      <CommandDialog open={cpOpen} onOpenChange={setCpOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigation">
              {CPObj.navigation.map((item, index) => (
                <CmdItm key={index} item={item} />
              ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Tools">
              {CPObj.tools.map((item, index) => (
                <CmdItm key={index} item={item} />
              ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Settings">
              {CPObj.settings.map((item, index) => (
                <CmdItm key={index} item={item} />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}

function CmdItm({ item }) {
  return (
    <CommandItem onSelect={item.action}>
      <HugeiconsIcon icon={item.icon} />
      <span>{item.label}</span>
      {item.shortcut && (
        <CommandShortcut>
          <Kbd>{item.shortcut}</Kbd>
        </CommandShortcut>
      )}
    </CommandItem>
  );
}

function createCPConfig({ closeCP, commands }) {
  const runCommand = (fn) => {
    fn();
    closeCP();
  };

  return {
    navigation: [
      {
        label: "Home",
        icon: Home03Icon,
        shortcut: "",
        action: () => runCommand(commands.goHome),
      },
    ],
    tools: [
      {
        label: "Multiplication Table",
        icon: Square01Icon,
        shortcut: "",
        action: () => runCommand(commands.goMultiplicationTable),
      },
      {
        label: "Taraweeh Counter",
        icon: SalahIcon,
        shortcut: "",
        action: () => runCommand(commands.goTaraweehCounter),
      },
    ],
    settings: [
      {
        label: "Profile",
        icon: UserIcon,
        shortcut: "",
        action: () => runCommand(commands.goProfile),
      },
      {
        label: "Dark Mode",
        icon: MoonIcon,
        shortcut: "",
        action: () => runCommand(commands.toggleTheme),
      },
      {
        label: "Settings",
        icon: Settings02Icon,
        shortcut: "",
        action: () => runCommand(commands.goSettings),
      },
    ],
  };
}
