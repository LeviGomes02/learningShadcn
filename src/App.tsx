import { DollarSign, Package, Percent, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { ChartOverview } from './components/chart';
import Sales from './components/sales';

function App() {
  const cards = [
    { name: 'Total Sales', description: 'Total sales in 30 days', icon: <DollarSign className="ml-auto h-4 w-4"/>, number: '$ 40.000' },
    { name: 'New Costumers', description: 'New constumers in 30 days', icon: <Users className="ml-auto h-4 w-4"/>, number: '234' },
    { name: 'Orders', description: 'Total orders in 30 days', icon: <Percent className="ml-auto h-4 w-4"/>, number: '3672' },
    { name: 'Stock', description: 'Total of products in stock', icon: <Package className="ml-auto h-4 w-4"/>, number: '498' },
  ];

  return (
    <div className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((element, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">{element.name}</CardTitle>
                {element.icon}
              </div>
              <CardDescription>{element.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">{element.number}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className='mt-4 flex flex-col md:flex-row gap-4'>
        <ChartOverview/>
        <Sales/>
      </section>
    </div>
  );
}

export default App;
