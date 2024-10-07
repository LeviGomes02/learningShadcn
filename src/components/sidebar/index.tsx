import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet';
import { Link } from 'react-router-dom';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

export function Sidebar({ children }: React.PropsWithChildren) {
  const sideIcons = [
    { name: 'Home', url: '#', icon: <Home /> },
    { name: 'Orders', url: '#', icon: <ShoppingBag /> },
    { name: 'Products', url: '#', icon: <Package /> },
    { name: 'Customer', url: '#', icon: <Users /> },
    { name: 'Settings', url: '#', icon: <Settings2 /> },
  ];

  return (
    <div>
      <div className="flex w-full flex-col bg-muted/40">
        <div className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
          <nav className="flex flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
              <Link
                to="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
              >
                <Package className="h-4 w-4" />
                <span className="sr-only">Logo</span>
              </Link>

              {sideIcons.map((element, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      to={element.url}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {/* <Home className="h-5 w-5" /> */}
                      <div className="h-5 w-5">{element.icon}</div>
                      <span className="sr-only">{element.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p className='text-blue-700'>{element.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </nav>

          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    to="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LogOut className="h-5 w-5 text-red-500" />
                    <span className="sr-only">Logout</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p className="text-red-500">Logout</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </div>

        <div className="sm:hidden div-flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelBottom className="w-5 h-5" />
                  <span className="sr-only">Open</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="sm:max-w-xs">
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      to="#"
                      className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                    >
                      <Package className="w-50 h-50 transition-all " />
                      <span className="sr-only">Logo</span>
                    </Link>

                    {sideIcons.map((element, index) => (
                      <Link
                        key={index}
                        to={element.url}
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      >
                        <div className="w-50 h-50 transition-all">{element.icon}</div>
                        <span>{element.name}</span>
                      </Link>
                    ))}
                    <Link
                      to="#"
                      className="fixed bottom-4 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LogOut className="w-50 h-50 transition-all text-red-500" />
                      <span className="text-red-500">Logout</span>
                    </Link>
                  </nav>
                </SheetDescription>
              </SheetContent>
            </Sheet>
            <h2>Menu</h2>
          </header>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
