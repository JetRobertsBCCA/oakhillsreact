import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './_index.module.scss';
import styles0 from './route.module.scss';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <span></span>
            <nav className={styles0.nav1}>
                <div />
                <a href="/home" className={styles0.a1}>
                    Home
                </a>{' '}
                |{' '}
                <a href="/projects" className={styles0.a2}>
                    Events
                </a>{' '}
                |{' '}
                <a href="/about" className={styles0.a3}>
                    About
                </a>{' '}
                |{' '}
                <a href="/contact" className={styles0.a4}>
                    Contact Us
                </a>
            </nav>
            <h2 className={styles.title}>Oak Hill Farms</h2>
            <p className={styles0.p1}>
                Boarding Lessons, Trail rides, Training, Birthday Parties<button></button>
            </p>
            <span className={styles.paragraph}>
                <div className={styles0.services}>
                    <div className={styles0.servicesContent}>
                        <h2 className={styles0.servicesTitle}>Our Training Programs</h2>
                        <p className={styles0.servicesDescription}>
                            Horseback riding, Home Schooling, and More...
                        </p>
                        <a href="#a" className={styles0.servicesButton}>
                            Sign up for programs here!
                        </a>
                    </div>
                    <div className={styles0.servicesCards}>
                        <div className={styles0.servicesCard}>
                            <img
                                className={styles0.servicesCardIcon}
                                src="https://static.wixstatic.com/shapes/27eba2_d9c1368c073d449fb7f70d1f27cdd94a.svg"
                                alt=""
                            />
                            <h6 className={styles0.servicesCardTitle}>Horse Boarding</h6>
                            <p className={styles0.servicesCardDescription}>
                                We fluently train riders from beginner to intermediate! 
                            </p>
                        </div>
                        <div className={styles0.servicesCard}>
                            <img
                                className={styles0.servicesCardIcon}
                                src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                                alt=""
                            />
                            <h6 className={styles0.servicesCardTitle}>Home Schooling</h6>
                            <p className={styles0.servicesCardDescription}>
                                Best homeschooling in the area! Offering a variety of classes.
                            </p>
                        </div>
                        <div className={styles0.servicesCard}>
                            <img
                                className={styles0.servicesCardIcon}
                                src="https://static.wixstatic.com/shapes/27eba2_db3d5faaafdb48d8acc17eaa13c45dca.svg"
                                alt=""
                            />
                            <h6 className={styles0.servicesCardTitle}>Private sessions</h6>
                            <p className={styles0.servicesCardDescription}>
                                Each private sessions is a great way to get some 1 on 1 time.
                            </p>
                        </div>
                        <div className={styles0.servicesCard}>
                            <img
                                className={styles0.servicesCardIcon}
                                src="https://static.wixstatic.com/shapes/27eba2_e55d51b82da445fd890f374888fd9bea.svg"
                                alt=""
                            />
                            <h6 className={styles0.servicesCardTitle}>Horse Training</h6>
                            <p className={styles0.servicesCardDescription}>
                                We have the best horse training in Mississippi!
                            </p>
                        </div>
                    </div>
                </div>
                <br />
            </span>
            <span>
                <div className={styles0.quotesSection}>
                    <h2 className={styles0.quotesSectionTitle}>Our Horses</h2>
                    <div className={styles0.quotesCardsContainer}>
                        <div className={styles0.quoteCard}>
                            <div className={styles0.quotePerson}>
                                <img
                                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                                    alt=""
                                />
                                <div className={styles0.customerDetails}>
                                    <p className={styles0.customerName}>Bella</p>
                                    <p className={styles0.customerTitle}>
                                        Product Manager, Startup
                                    </p>
                                </div>
                            </div>
                            <div className={styles0.quoteRating}>
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                            </div>
                            <p className={styles0.quoteText}>
                                I am a 3 y/o horse who loves being the life of the party!
                            </p>
                        </div>
                        <div className={styles0.quoteCard}>
                            <div className={styles0.quotePerson}>
                                <img
                                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                                    alt=""
                                />
                                <div className={styles0.customerDetails}>
                                    <p className={styles0.customerName}>Horse 2</p>
                                    <p className={styles0.customerTitle}>
                                        Customer Success, Startup
                                    </p>
                                </div>
                            </div>
                            <div className={styles0.quoteRating}>
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                            </div>
                            <p className={styles0.quoteText}>
                                I am a 7 y/o horse who pretty much the sheriff here!
                            </p>
                        </div>
                        <div className={styles0.quoteCard}>
                            <div className={styles0.quotePerson}>
                                <img
                                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                                    alt=""
                                />
                                <div className={styles0.customerDetails}>
                                    <p className={styles0.customerName}>Horse 3</p>
                                    <p className={styles0.customerTitle}>
                                        Product Manager, Startup
                                    </p>
                                </div>
                            </div>
                            <div className={styles0.quoteRating}>
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                                <img
                                    src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                                    alt=""
                                    className={styles0.ratingStarIcon}
                                />
                            </div>
                            <p className={styles0.quoteText}>
                                I am just here for the free food and friends.
                            </p>
                        </div>
                    </div>
                </div>
            </span>
            <div className={styles0.about}>
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_960,h_689,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Frame%206.png"
                    alt=""
                    className={styles0.aboutImage}
                />
                <h1 className={styles0.aboutTitleText}>How to find us!</h1>
                <h5 className={styles0.aboutSubtitleText}>Upcoming Events!</h5>
                <div className={styles0.aboutContentText}>
                    Location goes here <a href="/">!</a>
                </div>
                <div className={styles0.aboutButtonCell}>
                    <button className={styles0.aboutButton}>Contact Info</button>
                </div>
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_960,h_689,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Frame%206.png"
                    alt=""
                    className={styles0.aboutSecondImage}
                />
            </div>
            <span></span>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
