import SocialLinks from "./socialLinks"
export default function Footer() {
  return (
    <footer>
      <main className="flex flex-col space-y-5 items-center">
        <p><b>reach me out</b> for any inquiries</p>
        <SocialLinks />
        <p>No &copy; Achmad Hafiz 2333</p>
      </main>
    </footer>
  )
}