package main

import "strconv"

func fizzbuzz(n int) string {
	list := [2]string{"fizz", strconv.Itoa(n)}
	// 00, 01
	bin := min(n%3, 1)
	return list[bin]
}
