package main

import "testing"

func TestFizzBuzz(t *testing.T) {
	t.Run("should return string of 1 when input 1", func(t *testing.T) {
		input := 1
		want := "1"

		get := fizzbuzz(input)
		if want != get {
			t.Errorf("want %v but get %v", want, get)
		}
	})
}
