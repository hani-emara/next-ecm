import { LuShoppingCart } from 'react-icons/lu';
import clsx from 'clsx';

export default function OpenCart({className, quantity}) {
  return (
    <div className="relative flex h-5 w-5 items-center justify-center dark:text-white">
      <LuShoppingCart className={clsx('flex-shrink-0 size-4', className)}/>
      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-full bg-red-600 text-[8px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
