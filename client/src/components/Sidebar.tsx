import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaCodepen,
    FaSnapchatGhost,
    FaDiscord,
} from "react-icons/fa";
import { SiLeetcode, SiTiktok } from "react-icons/si";
import { FiCode } from "react-icons/fi";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a
                        href="https://github.com/SaurabhThakulla"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        data-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </li>

                <li>
                    <a
                        href="in/saurabh-thakulla-b057502ab"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        data-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.instagram.com/saurabh_thakulla/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                        data-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.facebook.com/ssauravt"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                        data-label="Facebook"
                    >
                        <FaFacebook />
                    </a>
                </li>

                <li>
                    <a
                        href="https://leetcode.com/u/Top4g/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LeetCode"
                        data-label="LeetCode"
                    >
                        <SiLeetcode />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.youtube.com/@hypertea9240"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="YouTube"
                        data-label="YouTube"
                    >
                        <FaYoutube />
                    </a>
                </li>

                <li>
                    <a
                        href="https://discord.com/channels/1460613786678460500/1460613787517325523"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Discord"
                        data-label="Discord"
                    >
                        <FaDiscord />
                    </a>
                </li>

                <li>
                    <a
                        href="https://codepen.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="CodePen"
                        data-label="CodePen"
                    >
                        <FaCodepen />
                    </a>
                </li>

                <li>
                    <a
                        href="https://dev.to/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Dev"
                        data-label="Dev"
                    >
                        <FiCode />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
