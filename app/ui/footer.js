export default function Footer () {
  return (
    <div className="flex flex-col justify-center items-center gap-1 text-gray-300 p-6 shadow-sm">
      <p className="font-medium text-sm pb-2">Created with ❤️ by Okwuidegbe Emmanuel</p>
      <p className="font-medium text-sm">
        2024 - {new Date().getFullYear()} ©
      </p>
    </div>
  )
}