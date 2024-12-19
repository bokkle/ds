import { useEffect, useState } from 'react';
import {
  GiAbstract001,
  GiAbstract005,
  GiAbstract040,
  GiAbstract050,
  GiAbstract049,
  GiAbstract059,
  GiAbstract034,
  GiAbstract033,
} from 'react-icons/gi';

const CrypticShapes = () => {
  const [shapeNum, setShapeNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (shapeNum < 7) {
        setShapeNum(shapeNum + 1);
      } else {
        setShapeNum(0);
      }
    }, 5000);
  }, [shapeNum]);

  return (
    <div className="hidden size-40 items-center justify-center border border-lime-800 bg-zinc-950 lg:flex">
      {shapeNum === 0 && <GiAbstract001 className="text-8xl text-lime-400" />}
      {shapeNum === 1 && <GiAbstract005 className="text-8xl text-lime-400" />}
      {shapeNum === 2 && <GiAbstract040 className="text-8xl text-lime-400" />}
      {shapeNum === 3 && <GiAbstract050 className="text-8xl text-lime-400" />}
      {shapeNum === 4 && <GiAbstract049 className="text-8xl text-lime-400" />}
      {shapeNum === 5 && <GiAbstract059 className="text-8xl text-lime-400" />}
      {shapeNum === 6 && <GiAbstract034 className="text-8xl text-lime-400" />}
      {shapeNum === 7 && <GiAbstract033 className="text-8xl text-lime-400" />}
    </div>
  );
};

export default CrypticShapes;
