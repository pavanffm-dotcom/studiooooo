# AI Atlas - Settings Components Blueprint

This file contains a snapshot of all the source code related to the application's settings pages.

---
## `src/components/settings/settings-page.tsx`
---

```tsx
"use client"

import React, { useState, useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  User,
  Shield,
  Bell,
  Palette,
  Languages,
  Settings,
  CreditCard,
  Cloud,
  HelpCircle,
  Info,
  ChevronRight,
  KeyRound,
  Trash2,
  FileClock,
  BarChart3,
  Fingerprint,
  Mail,
  ListFilter,
  BellOff,
  Sun,
  Laptop,
  Type,
  Moon,
  Globe,
  Heart,
  RefreshCw,
  Download,
  Star,
  History,
  CloudCog,
  FileText,
  MessageSquare,
  BookOpen,
  GitBranch,
  FileQuestion,
  LayoutGrid,
  TrendingUp,
  Wand2,
  LogOut,
  UserCircle,
} from "lucide-react"
import { Switch } from "../ui/switch"
import { Separator } from "../ui/separator"
import { ProfileDetails } from "./profile-details"
import { ChangePassword } from "./change-password"
import { DeleteAccount } from "./delete-account"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { DataPermissions } from "./data-permissions"
import { TwoFactorAuth } from "./two-factor-auth"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useLanguage } from "@/lib/language"
import { useAuth, useUser } from "@/firebase"
import { signOut } from "firebase/auth"
import { Button } from "../ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const LanguageSelector = () => {
    const { language, setLanguage, t } = useLanguage();

    const handleLanguageChange = (value: string) => {
        setLanguage(value as 'english' | 'mandarin' | 'hindi' | 'spanish' | 'arabic' | 'french');
    }
    
    return (
        <div className="p-2">
            <Select onValueChange={handleLanguageChange} defaultValue={language}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="mandarin">Mandarin Chinese</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

const ThemeSelector = () => {
    const [theme, setTheme] = React.useState('system');
    const { t } = useLanguage();


    React.useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
    }, [theme]);
    
    return (
        <div className="p-2 space-y-2">
            <RadioGroup defaultValue="system" onValueChange={setTheme}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light" className="flex items-center gap-2"><Sun className="w-4 h-4"/> {t('settings.appearance.theme.light')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark" className="flex items-center gap-2"><Moon className="w-4 h-4"/> {t('settings.appearance.theme.dark')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system" className="flex items-center gap-2"><Laptop className="w-4 h-4"/> {t('settings.appearance.theme.system')}</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

const FontSizeSelector = () => {
    const [fontSize, setFontSize] = React.useState('medium');
    const { t } = useLanguage();

    React.useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
        root.classList.add(`font-size-${fontSize}`);
    }, [fontSize]);

    return (
        <div className="p-2 space-y-2">
            <RadioGroup defaultValue="medium" onValueChange={setFontSize}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="font-small" />
                    <Label htmlFor="font-small">{t('settings.appearance.fontSize.small')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="font-medium" />
                    <Label htmlFor="font-medium">{t('settings.appearance.fontSize.medium')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="font-large" />
                    <Label htmlFor="font-large">{t('settings.appearance.fontSize.large')}</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}


export function SettingsPage() {
    const { t } = useLanguage();
    const auth = useAuth();
    const { user } = useUser();
    const [analyticsEnabled, setAnalyticsEnabled] = React.useState(false);
    const [pushEnabled, setPushEnabled] = React.useState(false);
    const [emailEnabled, setEmailEnabled] = React.useState(true);
    const [muteAll, setMuteAll] = React.useState(false);
    const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);


    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
          e.preventDefault();
          setInstallPrompt(e as BeforeInstallPromptEvent);
        };
    
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
        return () => {
          window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
      }, []);
    
      const handleInstallClick = () => {
        if (!installPrompt) {
          return;
        }
        installPrompt.prompt();
        installPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          setInstallPrompt(null);
        });
      };

    const handleSignOut = () => {
        signOut(auth);
    };

    const settingsConfig = [
      {
        title: t('settings.account.title'),
        icon: User,
        options: [
          { label: t('settings.account.profile'), icon: UserCircle, component: <ProfileDetails /> },
          { label: t('settings.account.password'), icon: KeyRound, component: <ChangePassword /> },
          { label: t('settings.account.delete'), icon: Trash2, color: "text-red-500", component: <DeleteAccount />, isDialog: true },
        ],
      },
      {
        title: t('settings.privacy.title'),
        icon: Shield,
        options: [
          { label: t('settings.privacy.permissions'), icon: Shield, component: <DataPermissions /> },
        ],
      },
      {
        title: t('settings.notifications.title'),
        icon: Bell,
        options: [
          { label: t('settings.notifications.push'), icon: Bell, control: "switch" },
          { label: t('settings.notifications.email'), icon: Mail, control: "switch", checked: true },
          { label: t('settings.notifications.category'), icon: ListFilter, component: <p className="px-2 text-sm text-muted-foreground">{t('settings.notifications.categoryDescription')}</p> },
          { label: t('settings.notifications.mute'), icon: BellOff, control: "switch" },
        ],
      },
      {
        title: t('settings.appearance.title'),
        icon: Palette,
        options: [
          { label: t('settings.appearance.theme.title'), icon: Sun, component: 'theme' },
          { label: t('settings.appearance.fontSize.title'), icon: Type, component: 'font' },
        ],
      },
      {
        title: t('settings.language.title'),
        icon: Languages,
        options: [
          { label: t('settings.language.app'), icon: Globe, component: 'language' },
          { label: t('settings.language.description'), icon: Globe, value: "English (US)" },
        ],
      },
      {
        title: t('settings.preferences.title'),
        icon: Settings,
        options: [
          { label: t('settings.preferences.defaultCategories'), icon: LayoutGrid },
          { label: t('settings.preferences.saveFavourites'), icon: Heart, control: "switch", checked: true },
          { label: t('settings.preferences.autoUpdate'), icon: RefreshCw, control: "switch", checked: true },
          { label: t('settings.preferences.download'), icon: Download, customOnClick: installPrompt ? handleInstallClick : undefined },
        ],
      },
      {
        title: t('settings.billing.title'),
        icon: CreditCard,
        options: [
          { label: t('settings.billing.status'), icon: Star, value: "Pro" },
          { label: t('settings.billing.plans'), icon: TrendingUp },
          { label: t('settings.billing.history'), icon: History },
        ],
      },
      {
        title: t('settings.sync.title'),
        icon: Cloud,
        options: [
          { label: t('settings.sync.cloud'), icon: CloudCog, control: "switch", checked: true },
          { label: t('settings.sync.backup'), icon: FileText },
          { label: t('settings.sync.restore'), icon: RefreshCw },
        ],
      },
      {
        title: t('settings.support.title'),
        icon: HelpCircle,
        options: [
          { label: t('settings.support.faq'), icon: FileQuestion },
          { label: t('settings.support.contact'), icon: MessageSquare },
          { label: t('settings.support.report'), icon: Info },
          { label: t('settings.support.tutorials'), icon: BookOpen },
        ],
      },
      {
        title: t('settings.about.title'),
        icon: Info,
        options: [
          { label: t('settings.about.version'), icon: GitBranch, value: "1.0.0" },
          { label: t('settings.about.terms'), icon: FileText },
          { label: t('settings.about.privacy'), icon: Shield },
          { label: t('settings.about.developer'), icon: User },
        ],
      },
    ]

    const handleToggle = (label: string, checked: boolean) => {
        switch (label) {
            case t('settings.privacy.analytics'):
              setAnalyticsEnabled(checked);
              console.log(`App analytics ${checked ? 'enabled' : 'disabled'}`);
              break;
            case t('settings.notifications.push'):
              setPushEnabled(checked);
              console.log(`Push notifications ${checked ? 'enabled' : 'disabled'}`);
              break;
            case t('settings.notifications.email'):
              setEmailEnabled(checked);
              console.log(`Email alerts ${checked ? 'enabled' : 'disabled'}`);
              break;
            case t('settings.notifications.mute'):
              setMuteAll(checked);
              if (checked) {
                setPushEnabled(false);
                setEmailEnabled(false);
              }
              console.log(`Mute all ${checked ? 'enabled' : 'disabled'}`);
              break;
            default:
              break;
          }
      };

  return (
    <div className="p-4">
       <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                <AvatarFallback>{user?.displayName?.charAt(0) || user?.email?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="text-2xl font-bold">{user?.displayName || 'Community Member'}</h1>
                <p className="text-muted-foreground">{user?.email}</p>
            </div>
        </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {settingsConfig.map((category, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-b-0 mb-3 bg-card/80 backdrop-blur-sm rounded-3xl px-4 soft-shadow">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lavender to-soft-blue flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-semibold text-lg text-foreground">{category.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-1">
              {category.options.map((option, i) => {
                let componentToRender;
                if(option.component === 'theme') {
                    componentToRender = <ThemeSelector />;
                } else if (option.component === 'font') {
                    componentToRender = <FontSizeSelector />;
                } else if (option.component === 'language') {
                    componentToRender = <LanguageSelector />;
                } else {
                    componentToRender = option.component;
                }

                const isSwitch = option.control === 'switch';
                let isChecked;
                switch (option.label) {
                    case t('settings.privacy.analytics'):
                        isChecked = analyticsEnabled;
                        break;
                    case t('settings.notifications.push'):
                        isChecked = pushEnabled && !muteAll;
                        break;
                    case t('settings.notifications.email'):
                        isChecked = emailEnabled && !muteAll;
                        break;
                    case t('settings.notifications.mute'):
                        isChecked = muteAll;
                        break;
                    default:
                        isChecked = option.checked;
                        break;
                }
                
                const itemContent = (
                    <SettingItem 
                        option={option} 
                        isChecked={isSwitch ? isChecked : undefined}
                        onToggle={isSwitch ? (checked) => handleToggle(option.label, checked) : undefined}
                        customOnClick={option.customOnClick}
                    />
                );

                const itemWrapper = (children: React.ReactNode) => (
                    option.customOnClick ? (
                        <button className="w-full text-left" onClick={option.customOnClick} disabled={!installPrompt}>
                            {children}
                        </button>
                    ) : children
                );


                return (
                    <div key={i}>
                    {option.isDialog ? (
                        <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="w-full">
                            <SettingItem option={option} />
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>{option.label}</AlertDialogTitle>
                            </AlertDialogHeader>
                            {componentToRender}
                        </AlertDialogContent>
                        </AlertDialog>
                    ) : componentToRender ? (
                        <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`option-${i}`} className="border-b-0">
                            <AccordionTrigger className="hover:no-underline">
                                <SettingItem option={option} />
                            </AccordionTrigger>
                            <AccordionContent className="pb-4">
                                {componentToRender}
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    ) : (
                        <>
                         {itemWrapper(itemContent)}
                        {i < category.options.length - 1 && <Separator className="bg-border/50"/>}
                        </>
                    )}
                    </div>
              )})}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
        <div className="mt-8">
            <Button variant="outline" className="w-full bg-card/80" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
            </Button>
        </div>
    </div>
  )
}

const SettingItem = ({ option, onToggle, isChecked, children, customOnClick }: { option: any; onToggle?: (checked: boolean) => void; isChecked?: boolean, children?: React.ReactNode, customOnClick?: () => void }) => (
    <div className="flex items-center justify-between py-4" onClick={customOnClick}>
      <div className="flex items-center gap-4">
        <option.icon className={`w-6 h-6 text-muted-foreground ${option.color || ""}`} />
        <span className={`text-base ${option.color || "text-foreground"}`}>{option.label}</span>
      </div>
      <div className="flex items-center gap-3">
        {option.value && <span className="text-base text-muted-foreground">{option.value}</span>}
        {option.control === "switch" ? (
          <Switch defaultChecked={option.checked} onCheckedChange={onToggle} checked={isChecked} />
        ) : (
          !option.component && !children && !customOnClick && <ChevronRight className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
    </div>
  );
```

---
## `src/components/settings/profile-details.tsx`
---

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth, useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { updateProfile } from 'firebase/auth';
import { useEffect } from 'react';

const profileSchema = z.object({
  displayName: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email(),
});

type ProfileFormValue = z.infer<typeof profileSchema>;

export function ProfileDetails() {
  const auth = useAuth();
  const { user } = useUser();
  const { toast } = useToast();

  const form = useForm<ProfileFormValue>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: '',
      email: '',
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        displayName: user.displayName || '',
        email: user.email || '',
      });
    }
  }, [user, form]);

  const onSubmit = async (data: ProfileFormValue) => {
    if (!auth.currentUser) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'You must be logged in to update your profile.',
      });
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: data.displayName,
      });
      toast({
        title: 'Success!',
        description: 'Your profile has been updated.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-2">
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} readOnly disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
```

---
## `src/components/settings/change-password.tsx`
---

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { updatePassword } from 'firebase/auth';

const passwordSchema = z.object({
  newPassword: z.string().min(6, 'Password must be at least 6 characters.'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // path of error
});

type PasswordFormValue = z.infer<typeof passwordSchema>;

export function ChangePassword() {
  const auth = useAuth();
  const { toast } = useToast();

  const form = useForm<PasswordFormValue>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: PasswordFormValue) => {
    if (!auth.currentUser) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'You must be logged in to change your password.',
      });
      return;
    }

    try {
      await updatePassword(auth.currentUser, data.newPassword);
      toast({
        title: 'Success!',
        description: 'Your password has been changed successfully.',
      });
      form.reset();
    } catch (error: any) {
       toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-2">
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm New Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Change Password
        </Button>
      </form>
    </Form>
  );
}
```

---
## `src/components/settings/delete-account.tsx`
---

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from 'firebase/auth';
import { AlertDialogDescription, AlertDialogFooter } from '../ui/alert-dialog';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';

const deleteSchema = z.object({
  password: z.string().min(1, 'Password is required.'),
});

type DeleteFormValue = z.infer<typeof deleteSchema>;

export function DeleteAccount() {
  const auth = useAuth();
  const { toast } = useToast();

  const form = useForm<DeleteFormValue>({
    resolver: zodResolver(deleteSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = async (data: DeleteFormValue) => {
    const user = auth.currentUser;
    if (!user || !user.email) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No user is currently logged in or user has no email.',
      });
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(user.email, data.password);
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
      
      toast({
        title: 'Account Deleted',
        description: 'Your account has been permanently deleted.',
      });
      // The onAuthStateChanged listener in FirebaseProvider will handle the redirect.

    } catch (error: any) {
      let description = 'An unknown error occurred.';
      if (error.code === 'auth/wrong-password') {
        description = 'The password you entered is incorrect. Please try again.';
      } else if (error.code === 'auth/too-many-requests') {
        description = 'Too many attempts. Please try again later.';
      } else if (error.code === 'auth/requires-recent-login') {
        description = 'This operation is sensitive. Please log out and log in again before deleting your account.'
      }
      toast({
        variant: 'destructive',
        title: 'Deletion Failed',
        description: description,
      });
    }
  };

  return (
    <>
      <AlertDialogDescription>
        This action is permanent and cannot be undone. Please enter your password to confirm you want to permanently delete your account.
      </AlertDialogDescription>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AlertDialogFooter className="pt-4">
            <AlertDialogCancel asChild>
                <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
            <Button type="submit" variant="destructive">
              Delete Account
            </Button>
          </AlertDialogFooter>
        </form>
      </Form>
    </>
  );
}
```

---
## `src/components/settings/data-permissions.tsx`
---

```tsx
'use client';

import { CheckCircle2, User, Mail, BarChart3 } from 'lucide-react';

const permissions = [
  {
    icon: User,
    title: 'Profile Information',
    description: 'We store your display name and profile picture.',
    granted: true,
  },
  {
    icon: Mail,
    title: 'Email Address',
    description: 'Used for authentication and communication.',
    granted: true,
  },
];

export function DataPermissions() {
  return (
    <div className="p-4 bg-background rounded-lg">
      <h3 className="text-lg font-semibold mb-4">
        Data We Collect & Why
      </h3>
      <div className="space-y-4">
        {permissions.map((permission) => (
          <div key={permission.title} className="flex items-start gap-4 p-3 bg-secondary/50 rounded-lg">
            <permission.icon className="w-6 h-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold">{permission.title}</h4>
              <p className="text-sm text-muted-foreground">
                {permission.description}
              </p>
            </div>
            <CheckCircle2
              className={`w-6 h-6 ml-auto mt-1 ${
                permission.granted ? 'text-green-500' : 'text-muted-foreground/30'
              }`}
            />
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-6 text-center">
        You can manage your data and privacy settings at any time. For more details, please see our Privacy Policy.
      </p>
    </div>
  );
}
```

---
## `src/components/settings/two-factor-auth.tsx`
---

```tsx
'use client';

import { useEffect, useState } from 'react';
import { useAuth, useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ShieldCheck, ShieldOff } from 'lucide-react';
import { Button } from '../ui/button';


export function TwoFactorAuth() {
  const { user } = useUser();
  const { toast } = useToast();
  const [is2faEnabled, setIs2faEnabled] = useState(false);

  useEffect(() => {
    if (user) {
        // In a real app, you'd check a specific MFA flag for the user.
        // For this UI demo, we'll simulate it being off by default.
        setIs2faEnabled(false);
    }
  }, [user]);

  const handleEnable = () => {
    // In a real app, this would trigger a more complex verification flow.
    setIs2faEnabled(true);
    toast({
        title: '2FA Enabled!',
        description: `Two-factor authentication is now active. (Demo)`,
    });
  }


  const handleDisable = () => {
    // In a real app, this would require re-authentication.
    setIs2faEnabled(false);
    toast({
        title: '2FA Disabled',
        description: 'Two-factor authentication has been turned off.',
      });
  }

  if (is2faEnabled) {
    return (
        <div className="px-2 text-center">
            <Card className='bg-green-50 border-green-200'>
                <CardHeader>
                    <div className='flex justify-center mb-2'>
                        <ShieldCheck className='w-12 h-12 text-green-600'/>
                    </div>
                    <CardTitle className='text-green-800'>2FA is Active</CardTitle>
                    <CardDescription className='text-green-700'>
                        Your account is protected with two-factor authentication.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="destructive" onClick={handleDisable} className='w-full'>Disable 2FA</Button>
                </CardContent>
            </Card>
        </div>
    )
  }

  return (
    <div className='px-2'>
        <div className="text-center">
            <Card className='bg-yellow-50 border-yellow-200'>
                <CardHeader>
                    <div className='flex justify-center mb-2'>
                        <ShieldOff className='w-12 h-12 text-yellow-600'/>
                    </div>
                    <CardTitle className='text-yellow-800'>2FA is Inactive</CardTitle>
                    <CardDescription className='text-yellow-700'>
                        Add an extra layer of security to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <Button onClick={handleEnable} className='w-full'>Enable 2FA</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
```
