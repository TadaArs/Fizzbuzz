package main

import "strconv"

func fizzbuzz(n int) string {
	word := strconv.Itoa(n)
	list := [3]string{"fizzbuzz", "buzz", "fizz"}
	bin := min(n%3, 1) + min(n%5, 1)*2
	// 01 [3], 10 [5], 00 [15]
	if n%3 == 0 || n%5 == 0 {
		return list[bin]
	}
	return word

}
