
const StatusBox = ({ status }) => {
  return (
	<div class="pt-10 p-4 mb-4 text-sm text-blue-800 rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert">
	  <span class="font-medium">{status}</span>
	</div>
  )
}

export default StatusBox
