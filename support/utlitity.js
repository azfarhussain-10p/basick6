/**
 * @param data array to fetch row from
 * @param recycleOnEOF boolean
 * @return {*}
 */
export function fetchDataSet(data, recycleOnEOF = true) {
	if (__VU === undefined)
		throw new Error(
			'__VU is undefined. Method is being called outside of k6 which is not supported. '
		)
	let index = __VU - 1
	index = recycleOnEOF && index >= data.length - 1 ? index % data.length : index
	if (data[index] === undefined)
		throw new Error(
			`No data present on index ${index} of data array. Either set recycleOnEOF to true or increase rows`
		)
	return data[index]
}
