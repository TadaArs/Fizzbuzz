package main

import "strconv"

func fizzbuzz(n int) string {
	word := strconv.Itoa(n)
	list := [2]string{"fizz", "buzz"}
	bin := min(n%3, 1) + min(n%5, 0)
	if n%3 == 0 || n%5 == 0 {
		return list[bin]
	}
	return word

}
