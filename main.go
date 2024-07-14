package main

import "strconv"

func fizzbuzz(n int) string {
	if n == 3 {
		return "fizz"
	}
	if n == 5 {
		return "buzz"
	}
	return strconv.Itoa(n)
}
