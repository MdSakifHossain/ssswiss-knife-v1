// @ts-nocheck
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { default_fallbacks } from "@/constants";
import { Fire02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function NiyatCard({ niyat }) {
  const final_value = niyat || default_fallbacks.niyat_card;

  return (
    <div className="flex flex-col gap-3.5 w-full">
      <h3 className="text-2xl flex items-center gap-1.5 w-full">
        <HugeiconsIcon
          className="size-6 text-amber-600"
          icon={Fire02Icon}
          strokeWidth={1.8}
        />
        <span>{final_value.title}</span>
      </h3>

      <NiyatTabs apt={final_value.apt} />
    </div>
  );
}

function NiyatTabs({ apt }) {
  return (
    <Tabs defaultValue="arabic" className="w-full">
      <TabsList variant="line">
        <TabsTrigger value="arabic">Arabic</TabsTrigger>
        <TabsTrigger value="pronunciation">Pronunciation</TabsTrigger>
        <TabsTrigger value="translation">Translation</TabsTrigger>
      </TabsList>

      <TabsContent value="arabic">
        <ArabicTextCard>{apt.arabic}</ArabicTextCard>
      </TabsContent>

      <TabsContent value="pronunciation">
        <EnglishTextCard>{apt.pronunciation}</EnglishTextCard>
      </TabsContent>

      <TabsContent value="translation">
        <EnglishTextCard>{apt.translation}</EnglishTextCard>
      </TabsContent>
    </Tabs>
  );
}

function ArabicTextCard({ children }) {
  return (
    <Card>
      <CardContent className="text-xl text-right leading-12 dark:text-muted-foreground">
        {children}
      </CardContent>
    </Card>
  );
}

function EnglishTextCard({ children }) {
  return (
    <Card>
      <CardContent className="text-lg leading-7 font-mono font-light dark:text-muted-foreground">
        {children}
      </CardContent>
    </Card>
  );
}
