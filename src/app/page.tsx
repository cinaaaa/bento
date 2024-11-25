import LINKS from '@/links'
import { ThemeSwitcher } from './theme-switcher'
import MediumArticles from './medium-articles'

export default function Home() {
  return (
    <div className="relative mx-auto h-full w-[700px] max-w-full p-8 text-text dark:text-darkText md:p-16 xl:w-[1400px]">
      <div className="mb-12 w-full xl:fixed xl:mb-0 xl:w-[500px]">
        <img
          className="h-28 w-28 rounded-full border-2 border-border dark:border-darkBorder xl:h-[184px] xl:w-[184px]"
          src="/pfp.jpg"
          alt="profile picture"
        />

        <div className="mt-8">
          <h2 className="text-3xl font-heading sm:text-[44px]">Sina Farhadi</h2>
          <p className="mt-6 text-[17px]">
            I'm Sina, a Senior Frontend Engineer with 8+ years of experience
            building web applications across industries like marketing, fintech,
            banking, social media, GIS, AI, and blockchain. I’m passionate about
            creating smooth, user-friendly digital experiences and love tackling
            new challenges, whether in a team or on my own.
          </p>
        </div>
        <ThemeSwitcher />
      </div>
      <div className="ml-auto flex flex-col items-end justify-end">
        <div
          id="grid-container"
          className="grid w-full grid-cols-2 gap-10 text-text dark:text-text md:grid-cols-3 xl:w-1/2 xl:pb-16 w450:grid-cols-1 w450:gap-7"
        >
          {Object.keys(LINKS).map((key) => (
            <a
              className="rounded-base border-2 border-border bg-main p-5 shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:shadow-dark dark:hover:shadow-none"
              key={key}
              target="_blank"
              href={LINKS[key].link}
            >
              <img
                className="h-8 w-8 sm:h-10 sm:w-10"
                src={LINKS[key].icon.src}
                alt={LINKS[key].title}
              />
              <p className="mt-3 text-lg font-heading sm:text-xl">
                {LINKS[key].title}
              </p>
              <p className="mt-1 text-sm font-base sm:text-base">
                {LINKS[key].text}
              </p>
            </a>
          ))}
        </div>
        <div className="grid w-full gap-10  text-text dark:text-text xl:w-1/2 xl:pb-16 w450:gap-7">
          <MediumArticles />
        </div>
      </div>
    </div>
  )
}
