import React from 'react';

import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import {
  MdOutlineSubscriptions,
  MdOutlineSlowMotionVideo,
  MdLocalFireDepartment,
  MdLiveTv,
  MdPodcasts,
} from 'react-icons/md';
import { RiShoppingBagFill, RiFeedbackLine } from 'react-icons/ri';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiHanger } from 'react-icons/gi';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm, FiHelpCircle } from 'react-icons/fi';
import { IoGameControllerSharp, IoSettingsOutline } from 'react-icons/io5';
import { GoLightBulb } from 'react-icons/go';

export const categories = [
  { name: 'New', icon: <AiFillHome size={20} title="Home" />, type: 'home' },
  {
    name: 'Shorts',
    icon: <MdOutlineSlowMotionVideo size={20} title="Shorts" />,
    type: 'category',
  },
  {
    name: 'Subscriptions',
    icon: <MdOutlineSubscriptions size={20} />,
    type: 'category',
    divider: true,
  },
  {
    name: 'Trending',
    icon: <MdLocalFireDepartment size={20} />,
    type: 'category',
  },
  { name: 'Shopping', icon: <RiShoppingBagFill size={20} />, type: 'category' },
  { name: 'Music', icon: <CgMusicNote size={20} />, type: 'category' },
  { name: 'Films', icon: <FiFilm size={20} />, type: 'category' },
  { name: 'Live', icon: <MdLiveTv size={20} />, type: 'category' },
  {
    name: 'Gaming',
    icon: <IoGameControllerSharp size={20} />,
    type: 'category',
  },
  { name: 'News', icon: <ImNewspaper size={20} />, type: 'category' },
  { name: 'Sport', icon: <GiDiamondTrophy size={20} />, type: 'category' },
  { name: 'Learning', icon: <GoLightBulb size={20} />, type: 'category' },
  { name: 'Fashion & beauty', icon: <GiHanger size={20} />, type: 'category' },
  {
    name: 'Podcasts',
    icon: <MdPodcasts size={20} />,
    type: 'category',
    divider: true,
  },
  { name: 'Settings', icon: <IoSettingsOutline size={20} />, type: 'category' },
  {
    name: 'Report history',
    icon: <AiOutlineFlag size={20} />,
    type: 'category',
  },
  { name: 'Help', icon: <FiHelpCircle size={20} />, type: 'category' },
  {
    name: 'Send feedback',
    icon: <RiFeedbackLine size={20} />,
    type: 'category',
  },
];

export const popular = [
  { name: 'New', url: 'latest' },
  { name: 'Music', url: 'music' },
  { name: 'Satsang', url: 'satsang' },
  { name: 'Podcasts', url: 'podcasts' },
  { name: 'Ankit baiyanpuria', url: 'ankitbaiyanpuria' },
  { name: 'Fit Tuber', url: 'fittuber' },
  { name: 'Mixes', url: 'latestMixes' },
  { name: 'Kapil Sharma', url: 'kapilsharma2023' },
  { name: 'Live', url: 'live' },
  { name: 'Ranveer Allahbadia', url: 'ranveerallahbadia' },
  { name: 'Comedy Clubs', url: 'comedyclubs' },
  { name: 'Akshay Saini', url: 'akshaysaini' },
  { name: 'React', url: 'reactjs' },
  { name: 'Namaste Javascript', url: 'namastejs' },
  { name: 'Bollywood Music', url: 'latestBollywoodmusic' },
];
