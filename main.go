package main

import "strconv"

func fizzbuzz(n int) string {
	list := [3]string{"fizz", "buzz", strconv.Itoa(n)}
	// 01[3], 10[5], 11[str]
	bin, _ := strconv.ParseInt(strconv.Itoa(min(n%3, 1))+strconv.Itoa(min(n%5, 1)), 2, 64)
	return list[bin-1]
}
