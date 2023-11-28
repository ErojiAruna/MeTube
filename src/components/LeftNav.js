import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftNavItems from './LeftNavItems';
import { categories } from '../utils/constants';
import { Context } from '../context/contextApi';

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectedCategory(name);
      case 'home':
        return setSelectedCategory(name);
      case 'menu':
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-scroll h-full py-4 absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? 'translate-x-0' : ''
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavItems
                text={item.type === 'home' ? 'Home' : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate('/');
                }}
                className={`${
                  selectedCategory === item.name ? 'bg-white/[0.15]' : ''
                }`}
              />
              {item.divider && <hr className="my-5 border-gray-500" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-gray-500" />
        <div className="text-black/[0.5] text-[12px]">Clone by: Aruna</div>
      </div>
    </div>
  );
};

export default LeftNav;
