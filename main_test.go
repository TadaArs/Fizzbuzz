package main

import "testing"

func TestFizz(t *testing.T) {
	t.Run("should return string of 1 when input 1", func(t *testing.T) {
		input := 1
		want := "1"

		get := fizzbuzz(input)
		if want != get {
			t.Errorf("want %v but get %v", want, get)
		}
	})

	t.Run("should return string of 2 when input 2", func(t *testing.T) {
		input := 2
		want := "2"

		get := fizzbuzz(input)
		if want != get {
			t.Errorf("want %v but get %v", want, get)
		}
	})

	t.Run("should return fizz when input 3", func(t *testing.T) {
		input := 3
		want := "fizz"

		get := fizzbuzz(input)
		if want != get {
			t.Errorf("want %v but get %v", want, get)
		}
	})

	t.Run("should return string of 4 when input 4", func(t *testing.T) {
		input := 4
		want := "4"

		get := fizzbuzz(input)
		if want != get {
			t.Errorf("want %v but get %v", want, get)
		}
	})

	t.Run("should return buzz when input 5", func(t *testing.T) {
		input := 5
		want := "buzz"

		get := fizzbuzz(input)
		if want != get {
			t.Errorf("want %v but get %v", want, get)
		}
	})

	t.Run("should return fizz when input 6", func(t *testing.T) {
		input := 6
		want := "fizz"

		get := fizzbuzz(input)
		if want != get {
			t.Errorf("want %v but get %v", want, get)
		}
	})

	t.Run("should return string of 7 when input 7", func(t *testing.T) {
		input := 7
		want := "7"

		get := fizzbuzz(input)
		if want != get {
			t.Errorf("want %v but get %v", want, get)
		}
	})
}
