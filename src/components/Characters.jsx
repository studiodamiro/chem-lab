import useMeasure from 'react-use-measure';
import { useEffect } from 'react';
import { useNavigation } from '../context/NavigationProvider';
import cn from '../lib/tailwindMerge';
import randomBetween from '../lib/randomBetween';
import CharHomeDan from '../assets/CharHomeDan';
import CharHomeXia from '../assets/CharHomeXia';
import AnimateJump from './AnimateJump';

export default function Characters() {
  const content = useNavigation();
  const [ref, bounds] = useMeasure();

  console.log('right here!');

  return (
    <>
      <div
        ref={ref}
        className='absolute container w-full max-w-md z-20 mx-0 top-0 left-1/2 -translate-x-1/2 bg-red-800/70 h-1'
      />
      <div className={cn(content === 'game' && 'hidden', 'bg-red-400 min-w-screen min-h-screen overflow-hidden')}>
        {/* HOME */}
        <section className={cn(content === 'home' ? 'relative z-30' : 'hidden')}>
          <AnimateJump bounds={bounds}>
            <CharHomeDan className={'drop-shadow-md scale-50 lg:scale-75'} />
          </AnimateJump>
        </section>

        {/* ABOUT */}
        <section
          className={cn(
            content === 'about' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
          )}
        >
          ABOUT
        </section>

        {/* LEADERBOARD */}
        <section
          className={cn(
            content === 'highscore' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
          )}
        >
          LEADERBOARD
        </section>

        {/* PAUSED */}
        <section
          className={cn(
            content === 'paused' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
          )}
        >
          PAUSED
        </section>

        {/* GAME OVER */}
        <section
          className={cn(
            content === 'over' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
          )}
        >
          GAME OVER
        </section>

        {/* LEVEL UP */}
        <section
          className={cn(
            content === 'levelup' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
          )}
        >
          LEVEL UP
        </section>

        {/* COMIC */}
        <section
          className={cn(
            content === 'comic' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
          )}
        >
          COMIC
        </section>

        {/* SUMMARY */}
        <section
          className={cn(
            content === 'summary' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
          )}
        >
          SUMMARY
        </section>
      </div>
    </>
  );
}