import React from 'react';
import TabRoutes from './TabRoutes';


const MainStack = (Stack) => {
  return (
    <>    
    <Stack.Screen name="MainTabs" component={TabRoutes} screenOptions= {{headerShown: false}} />    
    </>
  );
}

export default MainStack;
