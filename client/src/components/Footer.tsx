import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: t('footer.successTitle'),
        description: t('footer.successDesc'),
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">{t('common.evAwareness')}</span>
            </div>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.benefits')}
                </a>
              </li>
              <li>
                <a href="#charging" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.charging')}
                </a>
              </li>
              <li>
                <a href="/simulator" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.simulator')}
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.sustainability')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.stayUpdated')}</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" data-testid="button-subscribe">
                {t('footer.subscribe')}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">
              {t('footer.poweredBy')}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
