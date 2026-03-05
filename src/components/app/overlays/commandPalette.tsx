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
} from "@/components/ui/command";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useAppConfig } from "@/contexts/appConfig/AppConfigProvider";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Cancel01Icon,
  CommandIcon,
  MoonIcon,
  Ramadhan01Icon,
  SalahIcon,
  SourceCodeIcon,
  Square01Icon,
  TheProphetsMosqueIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { useNavigate } from "react-router";

// ─── 1. COMMANDS ──────────────────────────────────────────────────────────────
// Pure side-effects. No UI. No palette shape.

function useCommands() {
  const navigate = useNavigate();
  const { setTheme } = useAppConfig();

  return {
    goMultiplicationTable: () => navigate("/multiplication_table_maker"),
    goTaraweehCounter: () => navigate("/taraweeh_counter"),
    goSalahIntentions: () => navigate("/salah_intentions"),
    goRamadanCalendar: () => navigate("/ramadan_calendar"),
    goGitHub: () =>
      window.open(
        "https://github.com/MdSakifHossain/ssswiss-knife-v1",
        "_blank",
        "noreferrer",
      ),
    toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
  };
}

// ─── 2. PALETTE CONFIG ────────────────────────────────────────────────────────
// Pure data. Maps commands → UI labels/icons. No hooks, no logic.

function buildPalette(commands) {
  return {
    tools: [
      {
        label: "Multiplication Table",
        icon: Square01Icon,
        action: commands.goMultiplicationTable,
      },
      {
        label: "Taraweeh Counter",
        icon: SalahIcon,
        action: commands.goTaraweehCounter,
      },
      {
        label: "Salah Intention / Niyat",
        icon: TheProphetsMosqueIcon,
        action: commands.goSalahIntentions,
      },
      {
        label: "Ramadan Calendar",
        icon: Ramadhan01Icon,
        action: commands.goRamadanCalendar,
      },
    ],
    settings: [
      { label: "Dark Mode", icon: MoonIcon, action: commands.toggleTheme },
      { label: "GitHub", icon: SourceCodeIcon, action: commands.goGitHub },
    ],
  };
}

// ─── 3. COMPONENTS ────────────────────────────────────────────────────────────
// Pure rendering. No business logic.

function CmdItem({ item, onSelect }) {
  return (
    <CommandItem onSelect={onSelect}>
      <HugeiconsIcon icon={item.icon} />
      <span>{item.label}</span>
    </CommandItem>
  );
}

function PaletteGroup({ heading, items, onSelect }) {
  return (
    <CommandGroup heading={heading}>
      {items.map((item, i) => (
        <CmdItem key={i} item={item} onSelect={() => onSelect(item)} />
      ))}
    </CommandGroup>
  );
}

// ─── 4. ORCHESTRATOR ──────────────────────────────────────────────────────────
// Wires everything together. The only place that knows about open/close state.

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const commands = useCommands();
  const palette = buildPalette(commands);

  const run = (action) => {
    action();
    setOpen(false);
  };

  const trigger = (
    <Button variant="ghost" onClick={() => setOpen(true)}>
      <HugeiconsIcon icon={CommandIcon} className="size-6" />
    </Button>
  );

  const paletteContent = (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <PaletteGroup
          heading="Tools"
          items={palette.tools}
          onSelect={(item) => run(item.action)}
        />
        <CommandSeparator />
        <PaletteGroup
          heading="Settings"
          items={palette.settings}
          onSelect={(item) => run(item.action)}
        />
      </CommandList>
    </Command>
  );

  if (isDesktop) {
    return (
      <>
        {trigger}
        <CommandDialog open={open} onOpenChange={setOpen}>
          {paletteContent}
        </CommandDialog>
      </>
    );
  }

  return (
    <>
      {trigger}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Commands</DrawerTitle>
          </DrawerHeader>
          {paletteContent}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="secondary" size="lg">
                <HugeiconsIcon icon={Cancel01Icon} />
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
