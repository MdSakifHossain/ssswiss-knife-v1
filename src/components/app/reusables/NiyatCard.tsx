import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fire02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function NiyatCard({ niyat }) {
  return (
    <div className="flex flex-col gap-3.5 w-full">
      <h3 className="text-2xl flex items-center gap-1.5 w-full">
        <HugeiconsIcon
          className="size-6 text-amber-600"
          icon={Fire02Icon}
          strokeWidth={1.8}
        />
        <span>{niyat.title}</span>
      </h3>

      <NiyatTabs apt={niyat.apt} />
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
        <Card>
          <CardContent className="text-xl text-right leading-12 dark:text-muted-foreground">
            {apt.arabic}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="pronunciation">
        <Card>
          <CardContent className="text-lg leading-7 font-mono font-light dark:text-muted-foreground">
            {apt.pronunciation}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="translation">
        <Card>
          <CardContent className="text-lg leading-7 font-mono font-light dark:text-muted-foreground">
            {apt.translation}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
