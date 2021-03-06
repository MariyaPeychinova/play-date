import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href="/meetups">
        <a>
          <Image
            src="/images/home-alt.svg"
            className=""
            alt="Home"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="/createMeetup">
        <a>
          <Image
            src="/images/calendar-add.svg"
            className=""
            alt="Create Meetup"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="/myProfile">
        <a>
          <Image
            src="/images/user.svg"
            className=""
            alt="My Profile"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="/settings">
        <a>
          <Image
            src="/images/settings.svg"
            className=""
            alt="Settings"
            width={24}
            height={24}
          />
        </a>
      </Link>
    </div>
  );
}
