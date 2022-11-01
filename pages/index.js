import { useState } from 'react';

import { getMonth } from '../src/utils'
import { CalendarHeader } from '../src/components/CalendarHeader';
import { Month } from '../src/components/Month';
import { Sidebar } from '../src/components/Sidebar';

export default function Home() {
  const [ currentMonth, setCurrentMonth ] = useState(getMonth());
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-col">
          <Sidebar />
          <Month month={currentMonth}/>
        </div>
      </div>
    </>
  );
};
