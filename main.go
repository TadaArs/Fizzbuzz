package main

import "strconv"

func fizzbuzz(n int) string {
	if n%3 == 0 {
		return "fizz"
	}
	return strconv.Itoa(n)
}
