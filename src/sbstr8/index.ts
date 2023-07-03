import { Switchboard } from '@/sbstr8/lib/types/config';
import { override } from '@/../sbstr8.config';
import Card from '@/sbstr8/components/card';
import ClipboardButton from '@/sbstr8/components/clipboard-button';
import Emoji from '@/sbstr8/components/emoji';
import Essay from '@/sbstr8/components/essay';
import Fig from '@/sbstr8/components/fig';
import Graph from '@/sbstr8/components/graph';
import Grid from '@/sbstr8/components/grid';
import Image from '@/sbstr8/components/image';
import Lede from '@/sbstr8/components/lede';
import LedeList from '@/sbstr8/components/lede-list';
import Link from '@/sbstr8/components/link';
import Md from '@/sbstr8/components/md';
import ReadMore from '@/sbstr8/components/read-more';
import Pre from '@/sbstr8/components/pre';
import PageHeader from '@/sbstr8/components/page/header';
import Blurb from '@/sbstr8/components/blurb';
import Feature from '@/sbstr8/components/feature';
import Video from '@/sbstr8/components/video';
import menu from '@/sbstr8/lib/menu';

export const defaults: Switchboard = {
  Card,
  ClipboardButton,
  Emoji,
  Essay,
  Fig,
  Graph,
  Grid,
  Image,
  Lede,
  LedeList,
  Link,
  Md,
  PageHeader,
  Pre,
  ReadMore,
  Blurb,
  Feature,
  Video,
  menu,
};
export default Object.assign({}, defaults, override);
