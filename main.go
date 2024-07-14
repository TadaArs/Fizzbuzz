package main

import "strconv"

func fizzbuzz(n int) string {
	list := [4]string{"fizzbuzz", "buzz", "fizz", strconv.Itoa(n)}
	// 00[15], 01[3], 10[5], 11[str]
	bin := min(n%3, 1) + min(n%5, 1)*2
	return list[bin]
}
