import SocialLinks from "./SocialLinks"
export default function Footer() {
  return (
    <footer>
      <main className="flex flex-col space-y-5 items-center p-5">
        <p><b>reach me out</b> for any inquiries</p>
        <SocialLinks />
        <p>No &copy; Achmad Hafiz 2333</p>
      </main>
    </footer>
  )
}