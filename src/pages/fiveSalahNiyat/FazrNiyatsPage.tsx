// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AiMagicIcon,
  CircleArrowRight02Icon,
  Link02Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function FazrNiyatsPage() {
  return (
    <MobileContent
      goBack
      pageHeading="Fazr Salah Niyat"
      pageDescription="It's the hardest but if you are Praying at Fazr Time.. I'm so proud of you."
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl flex items-center gap-2 w-full">
          <HugeiconsIcon icon={Link02Icon} strokeWidth={2} />
          <span>2 Rakah Sunnat</span>
        </h3>
        <TabsDemo />
      </div>
    </MobileContent>
  );
}

export function TabsDemo() {
  return (
    <Tabs defaultValue="arabic" className="mx-auto w-full max-w-xs">
      <TabsList variant="">
        <TabsTrigger value="arabic">Arabic</TabsTrigger>
        <TabsTrigger value="pronunciation">Pronunciation</TabsTrigger>
        <TabsTrigger value="translation">Translation</TabsTrigger>
      </TabsList>

      <TabsContent value="arabic">
        <Card className="mx-auto w-full max-w-xs">
          <CardContent className="text-2xl text-left">
            نَوَايْتُ اَنْ اُصَلِّىَ لِلَّهِ تَعَالَى رَكْعَتَىْ صَلَوةِ
            الْفَجْرِ سُنَّةُ رَسُوْلُ اللهِ تَعَالَى مُتَوَجِّهًا اِلَى جِهَةِ
            الْكَعْبَةِ الشَّرِيْفَةِ اَللهُ اَكْبَرُ
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="pronunciation">
        <Card className="mx-auto w-full max-w-xs">
          <CardContent className="text-muted-foreground text-base">
            Nawai tuan usallia lillahi ta'ala rak'atai swalathil Fajre sunnathu
            rasulullahi ta'ala muthawaj-jihan ila jihatil ka'batish sharifathi,
            Allahu akbar
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="translation">
        <Card>
          <CardContent className="text-muted-foreground text-base">
            I turn to Allah the most high with the intention to pray 2 unit Fajr
            the way the messenger of Allah did for the most high facing towards
            the noble Ka'bah, Allah is most great
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
