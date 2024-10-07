import { User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export default function Sales() {

    const newUsers = [
        {name: 'Random person 1', email: 'randonperson1@test.com'},
        {name: 'Random person 2', email: 'randonperson2@test.com'},
        {name: 'Random person 3', email: 'randonperson3@test.com'},
        {name: 'Random person 4', email: 'randonperson4@test.com'},
    ]

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">Latest clients</CardTitle>
          <User className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>New clients in the last 24 hours.</CardDescription>
      </CardHeader>

      <CardContent>
        {newUsers.map((element, index) => (
        <article className="flex items-center gap-2 border-b py-2" key={index}>
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://www.freeiconspng.com/thumbs/person-icon-blue/person-icon-blue-18.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p>{element.name}</p>
            <span className="text-[12px] sm:text-sm text-gray-400">{element.email}</span>
          </div>
        </article>
        ))}
      </CardContent>
    </Card>
  );
}
