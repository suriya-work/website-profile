import Link from "next/link"

const Button = ({ link, text }) => {
    return (
        <div>
            <Link href={link}  className="btn">{text}</Link>
        </div>
    )
}

export default Button
