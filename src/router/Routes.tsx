import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { generateArray } from '../utils';
import { Exercice1 } from '../pages/Exercice1';
import { NotFounPage } from '../pages/NotFound';

const componentsMap: Record<string, React.ComponentType> = {
  exe1: Exercice1,
};

export function RoutesCoordinator() {
  const routers = useMemo(() => {
    const exerciceQuantity = generateArray();

    return exerciceQuantity.map((exerciceNumber) => {
      const Component = componentsMap[`exe${exerciceNumber}`];

      return (
        <Route
          key={`exe${exerciceNumber}`}
          path={`exe${exerciceNumber}`}
          element={Component ? <Component /> : <NotFounPage />}
        />
      );
    });
  }, []);

  return (
    <Routes>
      {routers}
      <Route path="/" element={<Exercice1 />} />
      <Route path="*" element={<NotFounPage />} />
    </Routes>
  );
}
